import React, {useEffect, useState} from "react";
import {styled} from "styled-components";
import {useRouter} from 'next/router'
import Loading from "@/components/loading";

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  background: #D9D9D9;
  outline: none;

  &::-webkit-scrollbar {
    background-color: lightgray;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 0 0 5px gray inset;
  }

  &::-webkit-scrollbar-thumb {
    background: #7D7D7D;
    border-radius: 5px;
  }
`

export default function Mailedit() {
    const [text, setText] = useState("mail");
    const [judge, setJudge] = useState(true);
    const [buttoncolor, setColor] = useState("#C5E99B");

    useEffect(() => {
        if (router.isReady) {
            const getTitle = router.query.title;
            const getContent = router.query.content;
            if (getTitle === undefined || getContent === undefined) {
                window.alert("不正なアクセスです")
                router.push('/home')
            } else {
                setTitle(decodeURIComponent(router.query.title))
                setContent(decodeURIComponent(router.query.content))
            }
        }
    }, [router.isReady]);


    const copyText = async () => {
        await global.navigator.clipboard.writeText(text)
        
        if(buttoncolor == "#D9D9D9") {
            setColor("#C5E99B")
        }
        if (judge == false) {
            setJudge(true)
        }

        window.alert("copied!")
    }

    const onHandleSetText = (e) => {
        setText(e.target.value)
    }

    const pushEdit = () => {
        setJudge(!judge)
        if (buttoncolor == "#C5E99B") {
            setColor("#D9D9D9")
        } else {
            setColor("#C5E99B")
        }
    }

    const backClick = () => {
        router.push('/home')
    }

    const handleSend = () => {
        router.push('mailto:?subject=' + title + '&body=' + content.replaceAll('\n', '%0D%0A'));
    }

    return (
        <div style={{ width: '100%', height: "100vh" }}>
            <div style={{ background: '#8cd790' }}>
                <div style={{ color: 'white', fontSize: 38, fontWeight: "lighter", letterSpacing: 5, textAlign: 'center' }}>就活メールつくるくん</div>
            </div>
            <img onClick={backClick} src="/logo_undo.svg" style={{ height: 50 }}></img>
            <div style={{width: '70%', margin: 'auto', marginTop: 35, height: '60%', position: 'relative' }} className="scroll-mail"><div style={{ width: '95%', height: '100%', float: 'left' }}>
                <StyledTextArea disabled={judge} onChange={onHandleSetText} value={text}/></div>
                <img src="/logo_copy.svg" style={{ width: '5%', position: 'absolute', bottom: 0, right: 0}} onClick={copyText}></img>
            </div>
            <div style={{ float: "left", marginTop: 60, width: '100%', textAlign: 'center' }}>
                <button style={{ border: 'none', letterSpacing: 3, paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, fontSize: 20, borderRadius: 10, background: buttoncolor, color: 'white', marginRight: 200, fontWeight: 'bold' }} onClick={pushEdit}>編集</button>
                <button style={{ border: 'none', letterSpacing: 3, paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, fontSize: 20, borderRadius: 10, background: "#C5E99B", color: 'white', marginLeft: 200, fontWeight: 'bold' }}>送信</button>
            </div>
        </div >
    )
}
