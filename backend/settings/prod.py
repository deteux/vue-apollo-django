from .settings import *

DEBUG = False
ALLOWED_HOSTS = ['*']

# Uncomment the following settings for prod, uses postgresql, setup a database and enter the proper credentials.
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'portfolio',
#         'USER': 'lizz',
#         'PASSWORD': '$password',
#         'HOST': '127.0.0.1',
#         'PORT': '5432',
#     }
# }
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': '',
        'STATS_FILE': os.path.join(FRONTEND_DIR, 'webpack-stats-prod.json'),
    }
}


STATICFILES_DIRS = [
    os.path.join(FRONTEND_DIR, "dist"),
    os.path.join(BASE_DIR, "static"),
]

MEDIA_URL = '/dmedia/'
MEDIA_ROOT = os.path.join(BASE_DIR, "mediafiles")

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

VUE_ROOT = os.path.join(STATIC_ROOT)
