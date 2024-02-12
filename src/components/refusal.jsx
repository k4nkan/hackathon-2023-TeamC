import React, { useState } from "react"

export default function Refusal(props) {
    const [data, setData] = useState('');
    const handle = (event) => {
        setData(event.target.value);
        props.setter(event.target.value)
        console.log(event.target.value)
    };

    return (
        <div style={{display: 'flex', marginLeft: '10%'}}>
            <div style={{ width: '30%', padding: '2vh 2vh 2vh 1vh'}}>
                <p style={{ fontSize: 20 }}>辞退理由</p>
                <select value={data} onChange={handle} style={{border: "solid 3px #c5e998", borderRadius: "5px"}}>
                    <option>-選択してください-</option>
                    <option>より志望度が高い他社から内定をもらった</option>
                    <option>希望していた職種ではなかった</option>
                    <option>志望業界が変わった</option>
                    <option>提示いただいた条件との折り合いがつかなかった</option>
                    <option>家庭の事情</option>
                    <option>その他</option>
                </select>
            </div>
            {(data === 'その他') && (
                <div style={{ width: '60%', padding: '2vh'}}>
                    <p style={{ fontSize: 20 }}>辞退理由(記述)</p>
                    <div><input placeholder="例：希望の勤務地ではなかったため" style={{ width: '100%', height: '10%', padding: 20, fontSize: 16, border: "solid 3px #c5e998", borderRadius: "10px" }}></input></div>
                </div>
            )}
        </div>
    )
}