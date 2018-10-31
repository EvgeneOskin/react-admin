import { CoreAdminRouter } from 'ra-core';
import { Loading } from 'ra-ui-materialui3';

const AdminRouter = CoreAdminRouter;

AdminRouter.defaultProps = {
  loading: Loading,
};

export default AdminRouter;
