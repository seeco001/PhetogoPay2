package com.amplifyframework.datastore.generated.model;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.amplifyframework.core.model.ModelPath;
import com.amplifyframework.core.model.PropertyPath;

/** This is an auto generated class representing the ModelPath for the CreditAccountInfo type in your schema. */
public final class CreditAccountInfoPath extends ModelPath<CreditAccountInfo> {
  private UserProfilePath userProfile;
  CreditAccountInfoPath(@NonNull String name, @NonNull Boolean isCollection, @Nullable PropertyPath parent) {
    super(name, isCollection, parent, CreditAccountInfo.class);
  }
  
  public synchronized UserProfilePath getUserProfile() {
    if (userProfile == null) {
      userProfile = new UserProfilePath("userProfile", false, this);
    }
    return userProfile;
  }
}
