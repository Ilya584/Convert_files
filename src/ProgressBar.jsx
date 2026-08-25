
import './App.css';

export default function ProgressBar({ progress }) {
  return (
    <div className="loading_bar"> 
      <div 
        className="progress_bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
