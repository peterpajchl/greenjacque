import './notification.css';

function Notification({msg, hasMsg, type = 'notification--info'}) {
  return (
    <div className={`notification ${type} ${hasMsg ? 'notification--visible slide-down' : ''}`}>
      <p className="notification__text">{msg}</p>
    </div>
  );
}

export default Notification;