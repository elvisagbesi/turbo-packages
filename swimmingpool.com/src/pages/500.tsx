import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@poolcorp/contentlib/components/button/button-component';

export default function Error() {
  return (
    <div className="m-auto flex h-[90vh] w-1/2 flex-col justify-center text-center align-middle">
      <h2 className="text-primary text-2xl font-semibold">
        Something went wrong!
      </h2>
      <p>If this issue persists, please contact an administrator</p>
      <div className="mx-auto flex w-52 justify-center pt-3">
        <Button
          text={'Back to home'}
          link={'/'}
          icon={<FontAwesomeIcon icon={faHome} className="text-white" />}
          iconPosition="right"
        />
      </div>
    </div>
  );
}
