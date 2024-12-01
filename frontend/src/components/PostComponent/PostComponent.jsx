import moment from "moment"
import { useState } from "react";
import { Link } from "react-router-dom"
import Lightbox from "yet-another-react-lightbox";
const PostComponent = ({ id, img = "", Title = "", desc = "",  createdat = "", username = ""}) => {
    const [query, setQuery] = useState("");
    const [copied, setCopied] = useState(false);
    const [open, setOpen] = useState(false);

    const getInviteLink = () => {
        return`localhost:5173/post/${id}`
    }

    const copyToClip = async () => {
        await navigator.clipboard.writeText(getInviteLink())
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            })
            .catch(err => console.error('Failed to copy:', err));
        }
	return (
		<>
		
           
        <div className={"post"}>
            <div className="user-info">
                <p>{username} &nbsp; Опубликовано: {moment(createdat).fromNow()}</p>
            </div>
            <Link to={`/post/${id}`}>
            <h2 className="post-title">{Title}</h2>
            </Link>
            <div className='content'>
            {img && 
                 <button type="button" className='image-button' onClick={() => setOpen(true)}>
                 <img src= {"/img/" + img } alt=""/>
               </button>
            }
                <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "/img/" + img }  
                ]}
                />
                <p dangerouslySetInnerHTML={{ __html: desc}} className='post-desc'></p>
                <hr/>
                <div className="tags">
                <Link to={`/post/${id}#comment`}>
                    <span>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.97 122.88"><path d="M61.44,0a61.46,61.46,0,0,1,54.91,89l6.44,25.74a5.83,5.83,0,0,1-7.25,7L91.62,115A61.43,61.43,0,1,1,61.44,0ZM96.63,26.25a49.78,49.78,0,1,0-9,77.52A5.83,5.83,0,0,1,92.4,103L109,107.77l-4.5-18a5.86,5.86,0,0,1,.51-4.34,49.06,49.06,0,0,0,4.62-11.58,50,50,0,0,0-13-47.62Z"/></svg>
                    </span>    
                </Link>
                
                <button className="share" onClick={() => copyToClip()}>
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M864 704c-52.688 0-99.295 25.585-128.431 64.88l-421.36-214.72c3.664-13.455 5.792-27.535 5.792-42.16 0-18.303-3.216-35.807-8.88-52.175l423.76-205.616C763.97 294.016 810.897 320 864.001 320c88.367 0 160-71.649 160-160 0-88.368-71.633-160-160-160S704 71.633 704 160c0 12.431 1.567 24.464 4.24 36.08L278.4 404.657c-29.281-32.273-71.393-52.656-118.4-52.656C71.631 352 0 423.633 0 512c0 88.351 71.631 160 160 160 50.895 0 96.127-23.824 125.423-60.865l423.104 215.632C705.664 838.736 704 851.152 704 864c0 88.368 71.632 160 160 160s160-71.632 160-160-71.632-160-160-160zm.002-639.999c53.008 0 96 42.992 96 96s-42.992 96-96 96-96-42.992-96-96 42.992-96 96-96zm-704 544c-53.024 0-96-42.992-96-96s42.976-96 96-96c53.008 0 96 42.992 96 96s-42.992 96-96 96zm704 352c-53.008 0-96-42.992-96-96s42.992-96 96-96 96 42.992 96 96-42.992 96-96 96z"/></svg>
                    {copied && <div className='push'>Скопировано!</div>}
                </button>
                </div>
            </div>
       
        </div>
    
		</>
	)
}

export { PostComponent }
