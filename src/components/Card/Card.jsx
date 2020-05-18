import React, {Component} from 'react';
import classnames from 'classnames';
import styles from './Card.module.css';

export default class Card extends Component {

  state = {
    done: false
  };

  handleCardOnClick = () => {
    this.setState({
      done: !this.state.done
    });
    console.log('click', this.props.eng)
  };

  render() {
    const {rus, eng, img} = this.props;
    const done = this.state;

    const style = img ? {
      backgroundImage: `url(${this.props.img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    } : {};

    return(
        <div className={ classnames({[styles.card]: true, [styles.done]: this.state.done }) }
             onClick={this.handleCardOnClick}
        >
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <span className={styles.cardFrontText}>{eng}</span>
            </div>
            <div className={styles.cardBack}
                  style={style}>
             <span className={styles.cardBackText}>{rus}</span>
            </div>
          </div>
        </div>
    )
  }
}