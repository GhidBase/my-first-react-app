function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  };

  return (
    <button style={buttonStyle}>{props.text}{props.text2}</button>
  );
}

export default function TestArea() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} text2="Yo yo yo"/>
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
      <Button text="Test Button" color="purple" fontSize={12} />
    </div>
  );
}
