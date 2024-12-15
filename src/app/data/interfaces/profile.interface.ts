export interface Profile { // interface - описание типа чего-либо, данных, что содержит
  id: number,
  userName: string,
  avatarUrl: string | null,
  description: string,
  subscriptionsAmount: number,
  firstName: string,
  lastName: string,
  isActive: boolean,
  stack: string[],
  city: string
}
