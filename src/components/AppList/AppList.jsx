import React from "react";

const AppList = () => {

  const items = ['task1', 'task2', 'task3'];
  const firstItems = <li>Item 0</li>;
  const isAuth = true;

  return (
      <ul>
        {isAuth ? firstItems : null}
        {items.map(item => <li>{item}</li>)}
        <li>One tasks</li>
        <li>Two tasks</li>
      </ul>
  )
};

export default AppListp;