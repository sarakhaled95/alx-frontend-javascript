export default function getStudentIdsSum(list) {
  return list.reduce((acc, item) => acc + item.id, 0);
}
