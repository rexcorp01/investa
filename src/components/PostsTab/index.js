import { getPostsEntitiesState, getPostHasMoreState, getPostsIsLoadingState } from '../../redux/selectors/entities/postsSelectors';
import { getNextPostsRequest, getRefreshPostsRequest } from '../../redux/actions/entities/postsActions';
import { connect } from 'react-redux';
import { getCurrentUserInfoState } from '../../redux/selectors/entities/userSelectors';
import { push } from '../../redux/actions/nav'
import PostsTab from './PostsTab';

function mapStateToProps (state) {
    return {
        posts: getPostsEntitiesState(state),
        isLoading: getPostsIsLoadingState(state),
        hasMore: getPostHasMoreState(state),
        currentUserInfo: getCurrentUserInfoState(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getRefreshPosts: () => dispatch(getRefreshPostsRequest()),
        getNextPosts: () => dispatch(getNextPostsRequest()),
        goScreen: (screen) => dispatch(push(screen))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsTab);