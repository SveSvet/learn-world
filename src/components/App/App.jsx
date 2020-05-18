import React, {Component} from "react";
import AppHeader from '../AppHeader/AppHeader';
import Paragraph from '../Paragraph/Paragraph.jsx';
import Block from "../Block/Block.jsx";
import Card from "../Card/Card";
import AppInput from "../AppInput/AppInput";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";
import imgOne from "./accets/img/1.jpeg";
import imgSecond from "./accets/img/2.jpg";
import imgThree from "./accets/img/3.jpg";
import imgFour from "./accets/img/4.jpg";
import imgFive from "./accets/img/5.jpg";
import imgSix from "./accets/img/6.jpg";
import imgSeven from "./accets/img/7.jpg";
import imgEight from "./accets/img/8.jpg";
import imgNine from "./accets/img/9.jpg";
import imgTen from "./accets/img/10.jpg";
import imgEleven from "./accets/img/11.jpg";

 class App extends Component {
    state = {
        words: [
        {eng: "travelling/ travel", rus: "путешествие", id: 1, img: imgOne},
        {eng: "gate", rus: "выход к самолету", id: 2, img: imgSecond},
        { eng: "cruise", rus: "круиз", id: 3, img: imgThree},
        { eng: "flight", rus: "полет/ рейс", id: 4, img: imgFour},
        { eng: "hitchhike", rus: "путешествие автостопом", id: 5, img: imgFive},
        { eng: "destination", rus: "место назначения (конечная цель)", id: 6, img: imgSix},
        { eng: "to see smb off ", rus: "провожать кого-либо", id: 7, img: imgSeven},
        { eng: "luggage (baggage)", rus: "багаж", id: 8, img: imgEight},
        { eng: "rucksack (backpack)", rus: "рюкзак (туристический рюкзак)", id: 9, img: imgNine},
        { eng: "trip/ school trip", rus: "поездка (короткая)/ экскурсия", id: 10, img: imgTen},
        { eng: "to depart", rus: "отправляться", id: 11, img: imgEleven},
    ]};


    render() {
        const state = this.state;
        const { eng, rus, id, img } = state.words;

        return (
            <div className={styles.wrap}>
                <Block titleBlock={"Hello! I'm second title"} >
                    <AppHeader>
                      Пора подтянуть твой английский!
                    </AppHeader>
                    <Paragraph styleColor>
                        Будем изучать английские слова с помощью карточек
                    </Paragraph>
                </Block>
                <div className={styles.appCard}>
                    {state.words.map(({eng, rus, id, img}) => <Card eng={eng} rus={rus} key={id} img={img}/>)}
                </div>
              <Paragraph>
                Отправьте нам тему для следующего изучения по карточкам и мы ее для вас подготовим!
              </Paragraph>
              <AppInput />
              <Footer>
                <Paragraph styleColor>
                  Выучи английский (и React)
                </Paragraph>
              </Footer>
            </div>
        )
    }
}

export default App;
