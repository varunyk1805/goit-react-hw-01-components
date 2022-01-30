import styles from './Statistics.module.css';


// Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.

// title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
// Компонент должен создавать DOM элемент следующей структуры.

const Statistics = (data) => {
    const statistics = styles.statistics;
    const title = styles.title;
    const stat_list = styles.stat_list;
    const item = styles.item;
    const label = styles.label;
    const percentage = styles.percentage;
    return (
        <>
            <section className={statistics}>
                {data.title && (
                    <h2 className={title}>{data.title}</h2>
                )}
                <ul className={stat_list}>
                    {data.stats.map(stat => (
                        <li key={stat.id} className={item}>
                            <span className={label}>{stat.label}</span>
                            <span className={percentage}>{stat.percentage}%</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

// <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>

export default Statistics;
