export const createFollow = leader_id => {
  return $.ajax({
    method: "POST",
    url: "/api/follows",
    data: { follow: {leader_id} }
  });
};

export const deleteFollow = leader_id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/follows/${leader_id}`,
    data: { follow: {leader_id}}
  });
};

export const fetchFollow = leader_id => {
  return $.ajax({
    method: "GET",
    url: `/api/follows/${leader_id}`,
    data: { follow: {leader_id}}
  });
};
