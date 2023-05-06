const BASE_URL = 'http://localhost:3000'; // REPLACE WITH YOUR LOCALHOST URL FOR TESTING LOCAL BACKEND
async function getMembers() {
  const res = await fetch(`${BASE_URL}/users/`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
  });

  const { users } = await res.json();
  return users;
}
async function getUserSelf() {
  const res = await fetch(`${BASE_URL}/users/self`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
  });

  const user_self = await res.json();
  return user_self;
}
async function getDiscordGroups() {
  const res = await fetch(`${BASE_URL}/discord-actions/groups`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
  });

  const { groups } = await res.json();
  return groups;
}
async function createDiscordGroupRole(groupRoleBody) {
  const res = await fetch(`${BASE_URL}/discord-actions/groups`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(groupRoleBody),
  });

  const self_user = await res.json();
  return self_user;
}

async function addGroupRoleToMember(memberRoleBody) {
  const res = await fetch(`${BASE_URL}/discord-actions/roles`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(memberRoleBody),
  });

  const data = await res.json();
  return data;
}

export {
  getMembers,
  getUserSelf,
  getDiscordGroups,
  createDiscordGroupRole,
  addGroupRoleToMember,
};
