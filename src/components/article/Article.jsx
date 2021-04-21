
import { StyledDiv, StyledButton } from './Article.style';
import hasan from '../../images/bridge4.jpeg';

function Article() {
    return (
        <StyledDiv>
        
            <h2>New Headings</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint placeat facere quo dolor vero a quia commodi nam praesentium deserunt!</p>
            <img src={hasan} alt="" />
          
            <StyledButton primary>Send</StyledButton>
            <StyledButton success>Click me</StyledButton>
            <StyledButton >Read more</StyledButton>
        
        </StyledDiv>
        
    )
}

export default Article
