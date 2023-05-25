import "./index.css";
function Host(props) {
	return (
		<aside className="host-comp">
			<div className="host-name">{props.hostName}</div>
			<div className="hostPicture">
				<img src={props.hostPicture} alt={props.id} />
			</div>
		</aside>
	);
}
export default Host;