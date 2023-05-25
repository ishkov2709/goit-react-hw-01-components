export default function makeStatsItems(stats, Item) {
  return stats.map(stat => {
    const { id, label, percentage } = stat;
    return <Item key={id} label={label} percentage={percentage} />;
  });
}
