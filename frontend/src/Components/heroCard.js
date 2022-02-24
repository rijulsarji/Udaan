import React from "react";
import "../CSS/Components/heroCard.css"

function HeroCard(){
    return(
        <>
        <section id="marquee" loop={true}>
        <div loop={true} className="heroCardContainer" >
            <div loop = {true} className="heroCardPicContainer" >
                <div className="heroPic" >
                    <img src="https://www.shethepeople.tv/wp-content/uploads/2015/12/11221290_10153564643961280_5855286294274909402_n.jpg" />
                </div>
                <div className="heroPic">
                    <img src="https://miro.medium.com/max/1400/0*bIhlabgoeyN-_N5s.jpg" />
                </div>
                <div className="heroPic">
                    <img src="https://images.hindustantimes.com/img/2021/08/31/550x309/KBC_first_Crorepati_1630375446283_1630375446527.jpg" />
                </div>
                <div className="heroPic">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJ_fzgubPVCHjmo68g98BsYDhzOQfc_LfgSWJAst7pMwdrQHTD2EsMwiN2JtNLDeBJlU&usqp=CAU" />
                </div>
                <div className="heroPic" >
                    <img src="https://www.shethepeople.tv/wp-content/uploads/2015/12/11221290_10153564643961280_5855286294274909402_n.jpg" />
                </div>
                <div className="heroPic">
                    <img src="https://miro.medium.com/max/1400/0*bIhlabgoeyN-_N5s.jpg" />
                </div>
                <div className="heroPic">
                    <img src="https://images.hindustantimes.com/img/2021/08/31/550x309/KBC_first_Crorepati_1630375446283_1630375446527.jpg" />
                </div>
                <div className="heroPic">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJ_fzgubPVCHjmo68g98BsYDhzOQfc_LfgSWJAst7pMwdrQHTD2EsMwiN2JtNLDeBJlU&usqp=CAU" />
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default HeroCard;