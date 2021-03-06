import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>{props.ingredients[igKey]}
                </li>
            )
        });

    return (
      <Aux>
          <h3> Your order </h3>
          <p>A delicious burger with the following ingredients</p>
          <ul>
              {ingredientsSummary}
          </ul>
          <p>Total Price : <strong> {props.price}</strong></p>
          <p>Continue to checkout ? </p>
          <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
          <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
};

export default orderSummary;

