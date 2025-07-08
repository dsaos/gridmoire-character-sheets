'use client';

const BaseContainer = ({ heading, content, style }: { heading?: string; content?: string; style?: React.CSSProperties }) => {
  return (
    <div style={{ ...styles.baseContainer, ...style }}>
      {heading && <h1>{heading}</h1>}
      <textarea>{content}</textarea>
    </div>
  );
}

const styles = {
  baseContainer: {
    padding: 20,
    border: '3px solid #ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f999',
    width: '100%',
    height: '100%',
  },
}

export default BaseContainer;
