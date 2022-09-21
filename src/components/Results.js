function Results({string, emotion}) {
    return (
        <section className="result">
            <h1 className={emotion}>Key Emotion: {emotion.toUpperCase()}</h1>
            <h2>{string}</h2>

        </section>
    );
  }



export default Results