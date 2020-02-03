import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controlls = [
    {label : 'Salad', type: 'salad'},
    {label : 'Bacon', type: 'bacon'},
    {label : 'Cheese', type: 'cheese'},
    {label : 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price : <strong>{props.price.toFixed(2)} </strong></p>
        {controlls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientsAdded(ctrl.type)}
                removed={() => props.ingredientsRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;