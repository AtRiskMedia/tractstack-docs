---
title: User Roles
description: Understanding Admin and Editor permissions in StoryKeep
---

StoryKeep supports two user roles with different levels of access and permissions. Understanding these roles helps organize team collaboration and maintain security.

## User Role Overview

### Editor Role

Editors have access to core content management functions:

**Accessible sections:**

- **Analytics**: View engagement metrics and visitor insights
- **Content**: Create and edit web pages and content
- **Branding**: Configure visual identity and basic settings

**Content permissions:**

- Create and edit story fragments (web pages)
- Create and edit context pages
- Manage images and media uploads
- Create and configure menus
- Create and manage resources
- Configure basic branding settings
- View analytics and activity data

**Restricted access:**

- Cannot access Advanced settings
- Cannot manage user accounts
- Cannot modify system configuration
- Cannot access administrative tools

### Admin Role

Admins have full system access including all Editor permissions plus administrative capabilities:

**Full access to all sections:**

- **Analytics**: Complete analytics access and data export
- **Content**: All content management capabilities
- **Branding**: Full branding configuration
- **Advanced**: System configuration and administrative tools
- **Activity**: Complete activity monitoring

**Additional admin permissions:**

- User management and role assignment
- System configuration access
- Advanced analytics and reporting
- API and integration management
- Database and performance settings
- Security configuration

## Authentication System

### Login Process

**StoryKeep access:**

- Development: `http://localhost:4321/storykeep`
- Production: `https://yourdomain.com/storykeep`

**Authentication requirements:**

- Username and password
- Role-based access control after login
- Session management and timeouts

### Password Management

**Security requirements:**

- Strong password policies enforced
- Secure password hashing in database
- Session-based authentication tokens

**Password storage:**

- Admin passwords: `ADMIN_PASSWORD_HASH` in `env.json`
- Editor passwords: `EDITOR_PASSWORD_HASH` in `env.json`
- Hashed using secure algorithms

## Role-Based Access Control

### Content Management Access

**Editor capabilities:**

- Create, edit, and delete web pages
- Upload and manage media files
- Configure page visibility and belief rules
- Access content analytics
- Manage basic site branding

**Admin additional access:**

- System-wide configuration changes
- User account management
- Advanced analytics features
- Integration settings
- Database management tools

### Analytics Access

**Editor analytics:**

- View engagement metrics
- Access visitor analytics
- Download lead data
- Monitor content performance

**Admin analytics:**

- All editor analytics capabilities
- System performance metrics
- Advanced reporting features
- Data export and integration options

## User Authentication Functions

### Authentication Utilities

The system provides authentication helper functions:

**`isAuthenticated(Astro)`**: Check if user is logged in
**`isAdmin(Astro)`**: Verify admin role access
**`getUserRole(Astro)`**: Get current user's role
**`requireAdminOrEditor(Astro)`**: Enforce role requirements

### Access Control Implementation

**Page-level protection:**

```javascript
const authCheck = requireAdminOrEditor(Astro);
if (authCheck) {
  return authCheck; // Redirect to login
}
```

**Role-specific features:**

```javascript
const userIsAdmin = isAdmin(Astro);
const userIsAuthenticated = isAuthenticated(Astro);
const role = userIsAdmin ? "admin" : userIsAuthenticated ? "editor" : null;
```

## Session Management

### Session Security

**Session features:**

- Secure session tokens
- Automatic session timeout
- Cross-browser session management
- Secure logout functionality

**Session storage:**

- Server-side session management
- Encrypted session data
- Automatic cleanup of expired sessions

### Multi-Device Access

**Concurrent sessions:**

- Multiple device login support
- Session synchronization across devices
- Secure session invalidation when needed

## Role Assignment

### Initial Setup

During initial TractStack setup:

1. **Admin account creation**: First user becomes admin
2. **Password configuration**: Secure admin credentials
3. **Editor account setup**: Optional additional editor accounts

### Admin User Management

**Admin capabilities for user management:**

- Create new editor accounts
- Modify existing user permissions
- Reset user passwords
- Deactivate user accounts
- Monitor user activity

**User account configuration:**

- Role assignment (Admin/Editor)
- Password requirements
- Access permissions
- Account status management

## Security Considerations

### Password Security

**Best practices:**

- Use strong, unique passwords
- Regular password updates
- Secure password storage
- Two-factor authentication (where available)

### Access Control

**Security measures:**

- Role-based permissions enforcement
- Session timeout management
- Failed login attempt monitoring
- Secure authentication tokens

### Audit Trail

**Activity monitoring:**

- User login/logout tracking
- Content modification history
- Administrative action logging
- Security event monitoring

## Workflow Recommendations

### Team Organization

**Small teams (1-3 people):**

- One admin for system management
- Editors for content creation
- Clear role boundaries

**Larger teams:**

- Multiple admins for redundancy
- Content editors by specialty
- Regular access review

### Content Workflow

**Editor workflow:**

1. Create and edit content
2. Review and optimize based on analytics
3. Collaborate on content strategy
4. Monitor engagement metrics

**Admin oversight:**

1. System maintenance and updates
2. User account management
3. Performance monitoring
4. Security management
5. Strategic decision making

---

_User roles in StoryKeep provide appropriate access levels while maintaining security. Regular review of user permissions ensures proper access control as teams grow._
