import './ErrorHandiling.css';


const ErrorHandiling = (props) => {
      return (
            <div id='container' onClick={props.onConfirm}>
                  <header>
                        <h2>{props.title}</h2>
                  </header>
                  <div className='content'>
                        <p>{props.message}</p>
                  </div>
                  <footer className='actions'>
                        <button onClick={props.onConfirm}>Okay</button>
                  </footer>
            </div>
      );
}

export default ErrorHandiling;