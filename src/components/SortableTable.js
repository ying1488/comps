
import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-Sort';

function SortableTable(props) {

    const { config, data } = props;

    const {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th
                className="cursor-pointer hover:bg-100"
                onClick={() => setSortColumn(column.label)}
            >
                <div className="flex items-centre">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        };
    });
    //find the correct sortValue function and use it for sorting

    return (
        <Table{...props} data={sortedData} config={updatedConfig} />
    );
}
function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>;
    }
    if (sortOrder === null) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>;
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowUp />
        </div>;

    } else if (sortOrder === 'desc') {
        return <div>
            <GoArrowDown />
        </div>;
    }
}
export default SortableTable;