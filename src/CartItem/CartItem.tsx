import Button from '@material-ui/core/Button';
//Types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div className="cartitem">
      <h3 className="cartitem__title">{item.title}</h3>
      <div className="cartitem__information">
        <p className="cartitem__cost">Price: ${item.price}</p>
        <p className="cartitem__cost">Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="cartitem__buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p className="cartitem__cost">{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img className="cartitem__img" src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;