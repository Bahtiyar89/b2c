/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToDashboard(params: any) {
  NavigationService.navigate('Dashboard', params);
}

export function navigateToForgotPassword(params?: any) {
  NavigationService.navigate('ForgotPassword', params);
}
