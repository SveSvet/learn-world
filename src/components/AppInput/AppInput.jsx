import React, {Component} from "react";
import styles from "./AppInput.module.css";

export default class AppInput extends Component {

  state = {
    label: '',
  };


  onSubmit = () => {
    this.setState({
      label: ''
    });
  };

  render() {
    return (
        <form className={styles.form}
              onSubmit={this.onSubmit}>
          <input type="text"
                 className={styles.input}
                 placeholder="Введитему тему"
          />
          <input type="mail"
                 className={styles.input}
                 placeholder="Введите ваш e-mail"
          />
          <button type="submit"
                  className={styles.button}>
            Add
          </button>
        </form>
    )
  }
};
