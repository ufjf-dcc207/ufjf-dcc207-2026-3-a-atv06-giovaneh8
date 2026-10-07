import './Emoji.css';


type EMOJI_KEYS = 'happy' | 'sick' | 'dead';

const EMOJI_MAP = new Map<EMOJI_KEYS,
    string>([
        ['happy', '🙂'],
        ['sick', '🤢​'],
        ['dead', '​☠️​'],
    ]);




export default function Emoji() {
    let status: EMOJI_KEYS = "dead";

    function HappyClick() {
        console.log("Status: ", status);
    console.log("Happy!!");
    status = "happy";
    console.log("Status: ", status);
}
    return (
        <>
            <div className="emoji" >
                {EMOJI_MAP.get(status) || "🤔​"}
            </div>


            <div className="acoes" >
                <button onClick={HappyClick}>Happy</button>
            </div>
        </>
    );
}