import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function ProtexRouter() {
  const nameTrainer = useSelector(state => state.trainer)
  if (nameTrainer) { return <Outlet/> }
  else { return <Navigate to="/" /> }
}
export default ProtexRouter   