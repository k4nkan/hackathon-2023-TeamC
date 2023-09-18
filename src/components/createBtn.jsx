import Router from 'next/router'

export default function CreateBtn(props) {

    const createClick = () => {
        props.onClick()
    }

    return (
        <>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
                <button onClick={createClick} style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 15, paddingBottom: 15, border: 'none', background: "#C5E99B", color: 'white', cursor: 'pointer' }}>生成</button>
            </div>
        </>
    )
}