import { connect, styled } from 'frontity';
import Link from '../Link';

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source.post[item.id];
        return (
          <Link key={item.id} link={post.link}>
            {post.title.rendered}
          </Link>
        );
      })}
    </Items>
  );
};

export default connect(List);

const Items = styled.div`
  & > div {
    margin: 0px 0;
    font-size: 1.2em;
  }
`;
