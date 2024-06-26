// // interface BaseAuditableEntity {
// //   id: string;
// //   created?: Date;
// //   createdBy?: string;
// //   LastModified?: Date;
// //   lastModifiedBy?: string;
// //   deletedDate?: Date;
// //   deletedBy?: string;

// //   isDeleted: boolean;
// // }
export type User = {
  fullname: string;
  avatar: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}
