
function EnterSong () {
    return (
        <section>
          <form>
            <label for="song">Enter a song</label>
            <input type="text" name="song" id="song"></input>
            <button type='submit' id='submit' className='clip'>Is it Emo?</button>
          </form>
        </section>
    );
  }

  export default EnterSong