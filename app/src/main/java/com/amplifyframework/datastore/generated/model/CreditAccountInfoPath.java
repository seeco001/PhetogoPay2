package com.amplifyframework.datastore.generated.model;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.amplifyframework.core.model.ModelPath;
import com.amplifyframework.core.model.PropertyPath;

/** This is an auto generated class representing the ModelPath for the CreditAccountInfo type in your schema. */
public final class CreditAccountInfoPath extends ModelPath<CreditAccountInfo> {
  private UserProfilePath userProfiles;
  CreditAccountInfoPath(@NonNull String name, @NonNull Boolean isCollection, @Nullable PropertyPath parent) {
    super(name, isCollection, parent, CreditAccountInfo.class);
  }
  
  public synchronized UserProfilePath getUserProfiles() {
    if (userProfiles == null) {
      userProfiles = new UserProfilePath("userProfiles", false, this);
    }
    return userProfiles;
  }
}
