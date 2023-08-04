import { StatisticItem } from "../../type/StatisticItem";
interface StatisticProps {
  statistic: StatisticItem[];
}
export const Statistic: React.FC<StatisticProps> = ({ statistic }) => {
  return (
    <>
      <div className="main__statistic statistic">
        <table className="table statistic__table">
          <thead>
            <tr className="table__title statistic__title">
              <th scope="col"></th>
              <th scope="col">Note Category</th>
              <th scope="col">Active</th>
              <th scope="col">Archived</th>
            </tr>
          </thead>
          <tbody className="table__body statistic__body">
            {statistic.map((item: StatisticItem) => (
              <tr className="table__row statistic__row" key={item.category}>
                <th scope="row">
                  <img src={item.icon} alt="task" />
                </th>
                <td>{item.category}</td>
                <td>{item.active}</td>
                <td>{item.archived}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
