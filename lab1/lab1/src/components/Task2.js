import Table from 'react-bootstrap/Table';

const array = [['FirstName', 'John'], ['LastName', 'Silver'], ['Occupation', 'Pirate Capitan']]

export function Task2() {
    return (
        <div>
            <h2>Task2</h2>
            <Table striped bordered hover>
                <tbody>
                {array.map((row) => { return (<tr><th>{row[0]}</th><td>{row[1]}</td></tr>) } )}
                </tbody>
            </Table>
        </div>
    );
}
