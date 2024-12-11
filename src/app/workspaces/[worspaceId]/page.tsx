interface WorkspaceIdPageProps{
    params:{worspaceId:string}
}
const WorksPaceIdPage = ({params}:WorkspaceIdPageProps) => {
    return (
        <div>
            <h1>Workspace {params.worspaceId}</h1>
        </div>
    );
}
export default WorksPaceIdPage