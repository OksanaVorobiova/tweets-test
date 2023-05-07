import { LoadMoreBtn } from "./LoadMore.styled";

export default function LoadMore({ onClick }) {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
}
