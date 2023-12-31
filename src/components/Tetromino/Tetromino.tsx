import './Tetromino.css'
function Tetromino(props:{ color: string, horizontalPosition: number, verticalPosition: number}) {
    let horizontalPosition = props.horizontalPosition;
    let verticalPosition = props.verticalPosition
    let color = props.color;
  return (
  <>
    <div className="drop" style={{left: ""+horizontalPosition+"%", bottom:""+verticalPosition+"%"}}>
      <svg width="44" height="67" viewBox="0 0 44 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.204346 3.04613L0.204346 19.4342C0.204346 20.758 1.27922 21.8319 2.60306 21.8319H18.9941C20.3179 21.8319 21.3918 20.758 21.3918 19.4342V3.04513C21.3918 1.71929 20.3179 0.645416 18.9941 0.645416H2.60306C1.27922 0.645416 0.204346 1.71929 0.204346 3.04613Z" fill={color}/>
        <path d="M22.3157 47.7068V64.0958C22.3157 65.4197 23.3905 66.4935 24.7144 66.4935H41.1054C42.4293 66.4935 43.5031 65.4197 43.5031 64.0958V47.7068C43.5031 46.3809 42.4293 45.3071 41.1054 45.3071H24.7144C23.3895 45.3071 22.3157 46.3809 22.3157 47.7068Z" fill={color}/>
        <path d="M0.204346 25.3765L0.204346 41.7645C0.204346 43.0883 1.27922 44.1622 2.60306 44.1622H18.9941C20.3179 44.1622 21.3918 43.0883 21.3918 41.7645V25.3755C21.3918 24.0496 20.3179 22.9757 18.9941 22.9757H2.60206C1.27822 22.9757 0.204346 24.0496 0.204346 25.3765Z" fill={color}/>
        <path d="M0.204346 47.7068L0.204346 64.0958C0.204346 65.4197 1.27922 66.4935 2.60306 66.4935H18.9941C20.3179 66.4935 21.3918 65.4197 21.3918 64.0958V47.7068C21.3918 46.3809 20.3179 45.3071 18.9941 45.3071H2.60206C1.27822 45.3071 0.204346 46.3809 0.204346 47.7068Z" fill={color}/>
      </svg>
    </div>
  </>
  )
}

export default Tetromino





