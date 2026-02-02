import { useEffect } from "react";

export const Slogan = ()=>{
    useEffect(()=>{
        var container = document.querySelector('.headerWrite');
        container?.classList.add('sectionAnimationLeft');
        
    },[])
    return(
        <section>
            
            <div className="slogan ">
                <h2 className="headerWrite">So delightful to the last bite...</h2>
            </div>
        </section>
    )
}