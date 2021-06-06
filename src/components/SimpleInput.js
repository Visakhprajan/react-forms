import {useEffect, useRef, useState} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName,  setEnteredName] = useState('');
  const [enteredNameIsValid, setenteredNameIsValid] = useState(false);
  const [enterNameIsTouched, setenterNameIsTouched] = useState(false);

  useEffect(() => {
    if(enteredNameIsValid){
      console.log("Name Input is valid")
    }

  },[enteredNameIsValid]);


  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event =>{
    setenterNameIsTouched(true);

     if(enteredName.trim() === ''){
      setenteredNameIsValid(false);
      return;
    }
  }
  const onSubmissionHandler = event =>{
    event.preventDefault();
    console.log(enteredName);

    setenterNameIsTouched(true);

    if(enteredName.trim() === ''){
      setenteredNameIsValid(false);
      return;
    }
    setenteredNameIsValid(true);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue)
    setEnteredName('')
  }

  const nameInputIsValid = !enteredNameIsValid && enterNameIsTouched;

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmissionHandler}> 
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' id='name' 
          onChange={nameInputBlurHandler} 
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsValid && <p className='error-text'>Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
