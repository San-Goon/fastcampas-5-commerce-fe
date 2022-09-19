import { Icon, IconProps } from '@chakra-ui/react';

const ProfileIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 70 70" fill="none" {...props}>
      <path
        d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
        fill="#BEBEBE"
      />
      <path
        d="M11.957 61.279C12.4573 58.1032 13.6676 55.0811 15.4979 52.4379C17.3282 49.7947 19.7312 47.5986 22.528 46.013C22.7008 45.9198 22.8967 45.878 23.0925 45.8926C23.2883 45.9071 23.4759 45.9773 23.633 46.095C27.1271 48.5361 31.3012 49.8146 35.563 49.749C39.8607 49.8155 44.0684 48.515 47.579 46.035C47.7026 45.9415 47.8466 45.8785 47.9992 45.8512C48.1518 45.8239 48.3087 45.8331 48.457 45.878C48.5598 45.9143 48.6584 45.9616 48.751 46.019C53.551 49.019 58.063 54.164 59.412 60.01C52.891 66.3926 44.1258 69.9614 35.001 69.949C26.5201 69.962 18.3261 66.8791 11.957 61.279H11.957Z"
        fill="white"
      />
      <path
        d="M19.646 30.634C19.6513 26.3873 21.3404 22.316 24.3429 19.3127C27.3454 16.3095 31.4163 14.6194 35.663 14.613C39.91 14.6194 43.9812 16.3093 46.9842 19.3125C49.9872 22.3156 51.677 26.387 51.683 30.634C51.6775 34.8807 49.9877 38.9518 46.9845 41.9543C43.9813 44.9568 39.9097 46.6455 35.663 46.65C31.4166 46.6455 27.3454 44.9567 24.3426 41.9541C21.3398 38.9515 19.6508 34.8804 19.646 30.634Z"
        fill="white"
      />
    </Icon>
  );
};

export default ProfileIcon;