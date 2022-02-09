import propTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    const box = styles.box;
    const transaction_history = styles.transaction_history;

    return (
        <>
            <div className={box}>
                <table className={transaction_history}>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Currency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.type}</td>
                                <td>{item.amount}</td>
                                <td>{item.currency}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

TransactionHistory.propTypes = {
    items: propTypes.array.isRequired,
};

export default TransactionHistory;