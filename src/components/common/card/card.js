import Dropzone from 'components/common/dropzone';

export const Card = props => {
  const { id, title } = props;

  return (
    <Dropzone id={id} title={title}>
      {title}
    </Dropzone>
  );
};

export default Card;
