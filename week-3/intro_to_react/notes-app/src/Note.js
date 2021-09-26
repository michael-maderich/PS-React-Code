function Note(props) {
    return (
        <>
          <h2>{props.heading}</h2>
          <p>{props.message}</p>
        </>
    );
}

export default Note;