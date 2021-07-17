import Button from '@material-ui/core/Button';
//Types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img className="item__img" src={item.image} alt={item.title} />
    <div className="item__text">
      <h3 className="item__title">{item.title}</h3>
      <p className="item__discription">{item.description}</p>
      <h3 className="item__priceg">${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to catr</Button>
  </Wrapper>
)

export default Item;